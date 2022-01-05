import React, { memo } from 'react';
import { CheckCircleFilledIcon } from 'tdesign-icons-react';
import { Button } from 'tdesign-react';
import Style from './index.module.less';

export default memo(() => {
  const onClickAgain = () => {
    window.location.reload();
  };

  const onCheck = () => {
    window.location.href = '/detail/advanced#/detail/advanced';
  };

  return (
    <div className={Style.stepFourWrapper}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <CheckCircleFilledIcon className={Style.icon} />
        <div className={Style.title}>完成开票申请</div>
        <p>预计1～3个工作日会将电子发票发至邮箱，发票邮寄请耐心等待</p>
        <div className='tdesign-demo-block-column' style={{ marginTop: '20px' }}>
          <Button theme='primary' variant='base' onClick={onClickAgain}>
            再次申请
          </Button>
          <Button theme='default' variant='base' style={{ marginLeft: '15px' }} onClick={onCheck}>
            查看进度
          </Button>
        </div>
      </div>
    </div>
  );
});
