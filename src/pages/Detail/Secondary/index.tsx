import React, { memo } from 'react';
import classnames from 'classnames';
import { Tabs, List, Tag } from 'tdesign-react';
import PageBox from 'components/PageBox';
import { dataItemList } from './consts';
import Style from './index.module.less';

const { TabPanel } = Tabs;
const { ListItem } = List;

export default memo(() => {
  console.debug('init::二级详情页');
  // const changeBackgroundColor = () => {
  //   console.debug('onMouseOver');
  // };
  return (
    <PageBox withColor={false} withPadding={false}>
      <section className={classnames(Style.secondaryNotification)}>
        <Tabs placement={'top'} size={'medium'} defaultValue={'1'}>
          <TabPanel value='1' label='全部通知'>
            <div className={Style.tabsContent}>
              <div className={Style.msgList}>
                <List>
                  {dataItemList.map((item) => (
                    <ListItem
                      className={Style.listItem}
                      key={item.id}
                      action={
                        <>
                          <li>{item.createtime}</li>
                        </>
                      }
                    >
                      {/* <div onMouseOver={changeBackgroundColor}>Test</div> */}
                      <p className={Style.content}>
                        <Tag variant='dark' size='small' className={Style.tag}>
                          {item.tag}
                        </Tag>
                        {item.content}
                      </p>
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          </TabPanel>
          <TabPanel value='2' label='未读通知'>
            <div className={Style.tabsContent}>
              <div className={Style.msgList}>未读通知</div>
            </div>
          </TabPanel>
          <TabPanel value='3' label='已读通知'>
            <div className={Style.tabsContent}>
              <div className={Style.msgList}>已读通知</div>
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </PageBox>
  );
});
