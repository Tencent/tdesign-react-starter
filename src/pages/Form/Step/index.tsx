import React, { memo } from 'react';
import PageBox from 'components/PageBox';
import { Steps, Button, MessagePlugin } from 'tdesign-react';
import { StepOne, StepTwo, StepThree, StepFour } from './components';

const { StepItem: Step } = Steps;
interface IStep {
  title: string;
  content: string;
  component: any;
}

const steps: IStep[] = [
  {
    title: '申请提交',
    content: '申请提交已于12月21日提交',
    component: StepOne,
  },
  {
    title: '电子发票',
    content: '预计1～3个工作日',
    component: StepTwo,
  },
  {
    title: '发票已邮寄',
    content: '电子发票开出后7个工作日内联系',
    component: StepThree,
  },
  {
    title: '完成',
    content: '',
    component: StepFour,
  },
];

export default memo(() => {
  const [current, setCurrent] = React.useState(0);
  const Comp = steps[current].component;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <PageBox>
      <>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div style={{ marginTop: '52px' }}>
          <Comp steps={steps} current={current} />
          <div className='steps-action' style={{ marginTop: '20px' }}>
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                上一步
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button onClick={() => MessagePlugin.success('提交申请成功')}>完成</Button>
            )}
            {current < steps.length - 1 && (
              <Button type='submit' onClick={() => next()}>
                {current === 0 ? '提交申请' : '下一步'}
              </Button>
            )}
          </div>
        </div>
      </>
    </PageBox>
  );
});
