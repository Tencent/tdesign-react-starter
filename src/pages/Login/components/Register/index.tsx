import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { Form, MessagePlugin, Input, Checkbox, Button, FormInstanceFunctions, SubmitContext } from 'tdesign-react';
import { LockOnIcon, UserIcon, MailIcon, BrowseOffIcon, BrowseIcon } from 'tdesign-icons-react';
import useCountdown from '../../hooks/useCountDown';

import Style from './index.module.less';

const { FormItem } = Form;

export default function Register() {
  const [loginType, changeLoginType] = useState('phone');
  const [showPsw, toggleShowPsw] = useState(false);
  const countDown = useCountdown(60);
  const formRef = useRef<FormInstanceFunctions>();

  const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      const { checked } = formRef.current?.getFieldsValue?.(['checked']) as { checked: boolean };
      if (!checked) {
        MessagePlugin.error('请同意TDesign服务协议和TDesign 隐私声明');
        return;
      }
      MessagePlugin.success('注册成功');
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
        className={classnames(Style.itemContainer, `register-${loginType}`)}
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

        <FormItem name='password' rules={[{ required: true, message: '密码必填', type: 'error' }]}>
          <Input
            size='large'
            type={showPsw ? 'text' : 'password'}
            clearable
            placeholder='请输入登录密码'
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
        {loginType === 'phone' && (
          <FormItem name='verifyCode' rules={[{ required: true, message: '验证码必填', type: 'error' }]}>
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
        <FormItem className={Style.checkContainer} name='checked' initialData={false}>
          <Checkbox>我已阅读并同意 </Checkbox> <span>TDesign服务协议</span> 和<span>TDesign 隐私声明</span>
        </FormItem>
        <FormItem>
          <Button block size='large' type='submit'>
            {' '}
            注册{' '}
          </Button>
        </FormItem>
        <div className={Style.switchContainer}>
          <span className={Style.switchTip} onClick={() => switchType(loginType === 'phone' ? 'email' : 'phone')}>
            {loginType === 'phone' ? '使用邮箱注册' : '使用手机号注册'}
          </span>
        </div>
      </Form>
    </div>
  );
}
