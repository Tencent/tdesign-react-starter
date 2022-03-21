import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { Form, MessagePlugin, Input, Checkbox, Button, FormInstanceFunctions, SubmitContext } from 'tdesign-react';
import { LockOnIcon, UserIcon, MailIcon, BrowseOffIcon, BrowseIcon, RefreshIcon } from 'tdesign-icons-react';
import useCountdown from '../../hooks/useCountDown';
import { useHistory } from 'react-router-dom';
import { login } from 'modules/user';

import Style from './index.module.less';

const { FormItem } = Form;

export default function Login() {
  const [loginType, changeLoginType] = useState('password');
  const [showPsw, toggleShowPsw] = useState(false);
  const countDown = useCountdown(60);
  const formRef = useRef<FormInstanceFunctions>();
  const history = useHistory();

  const onSubmit = async (e: SubmitContext) => {
    if (e.validateResult === true) {
      try {
        const formValue = formRef.current?.getFieldsValue?.(true) || {};
        await login(formValue);

        MessagePlugin.success('登陆成功');

        history.push('/dashboard/base');
      } catch (e) {
        console.log(e);
        MessagePlugin.error('登录失败');
      }
    }
  };

  const switchType = (val: any) => {
    (formRef as any).value.reset();
    changeLoginType(val);
  };

  const handleCounter = () => {};
  return (
    <div>
      <Form
        ref={formRef}
        className={classnames(Style.itemContainer, `login-${loginType}`)}
        labelWidth={0}
        onSubmit={onSubmit}
      >
        {loginType === 'phone' && (
          <FormItem name='phone' rules={[{ required: true, message: '手机号必填', type: 'error' }]}>
            <Input maxlength={11} size='large' placeholder='请输入您的手机号' prefixIcon={<UserIcon />} />
          </FormItem>
        )}

        {loginType === 'email' && (
          <FormItem
            name='email'
            rules={[
              { required: true, message: '邮箱必填', type: 'error' },
              { email: true, message: '请输入正确的邮箱', type: 'warning' },
            ]}
          >
            <Input type='text' size='large' placeholder='请输入您的邮箱' prefixIcon={<MailIcon />} />
          </FormItem>
        )}

        {loginType === 'password' && (
          <>
            <FormItem name='password' rules={[{ required: true, message: '密码必填', type: 'error' }]}>
              <Input
                size='large'
                type={showPsw ? 'text' : 'password'}
                clearable
                placeholder='请输入登录密码：admin'
                prefixIcon={<LockOnIcon />}
                suffixIcon={
                  showPsw ? (
                    <BrowseIcon onClick={() => toggleShowPsw((current) => !current)} />
                  ) : (
                    <BrowseOffIcon onClick={() => toggleShowPsw((current) => !current)} />
                  )
                }
              />
            </FormItem>
            <div className={classnames(Style.checkContainer, Style.rememberPwd)}>
              <Checkbox>记住账号</Checkbox>
              <span className={Style.checkContainerTip}>忘记账号？</span>
            </div>
          </>
        )}

        {/* 扫码登陆 */}
        {loginType === 'qrcode' && (
          <>
            <div className={Style.tipContainer}>
              <span className='tip'>请使用微信扫一扫登录</span>
              <span className='refresh'>
                刷新 <RefreshIcon />{' '}
              </span>
            </div>
          </>
        )}
        {/* // 手机号登陆 */}
        {loginType === 'phone' && (
          <FormItem name='verifyCode'>
            <Input size='large' placeholder='请输入验证码' />
            <Button
              variant='outline'
              className={Style.verificationBtn}
              disabled={countDown > 0}
              onClick={handleCounter}
            >
              {countDown === 0 ? '发送验证码' : `${countDown}秒后可重发`}
            </Button>
          </FormItem>
        )}
        {loginType !== 'qrcode' && (
          <FormItem className={Style.btnContainer}>
            <Button block size='large' type='submit'>
              登录
            </Button>
          </FormItem>
        )}
        <div className={Style.switchContainer}>
          {loginType !== 'password' && (
            <span className={Style.switchTip} onClick={() => switchType('password')}>
              使用账号密码登录
            </span>
          )}
          {loginType !== 'qrcode' && (
            <span className={Style.switchTip} onClick={() => switchType('qrcode')}>
              使用微信扫码登录
            </span>
          )}
          {loginType !== 'phone' && (
            <span className={Style.switchTip} onClick={() => switchType('phone')}>
              使用手机号登录
            </span>
          )}
        </div>
      </Form>
    </div>
  );
}
