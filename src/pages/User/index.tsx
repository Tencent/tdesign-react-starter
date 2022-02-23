import React, { memo } from 'react';
import { Row, Col, Button, List } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';
import ReactEcharts from 'echarts-for-react';
import Card from 'components/Card';
import { TABLIST, TEAMS } from './consts';
import styles from './index.module.less';

const { ListItem, ListItemMeta } = List;

const User: React.FC<BrowserRouterProps> = () => (
  <div className={styles.user}>
    <Row gutter={16}>
      <Col xs={12} lg={12} xl={9}>
        <Card borded={false} className={styles.welcome}>
          <Row justify='space-between'>
            <Col className={styles.name}>
              Hi，Image <span className={styles.regular}>下午好，今天是你加入鹅厂的第 100 天～</span>
            </Col>
            <Col>
              <img src='https://tdesign.gtimg.com/starter/assets-tencent-logo.png' className={styles.logo} />
            </Col>
          </Row>
        </Card>
        <Card
          borded={false}
          className={styles.userinfo}
          title='个人信息'
          extra={
            <Button shape='square' theme='default' variant='text'>
              <IconFont name='edit' />
            </Button>
          }
        >
          <Card.Grid xs={6} sm={4} xl={3} style={{ boxShadow: 'none', padding: 0 }}>
            <div className={styles.label}>手机</div>
            <div className={styles.value}>+86 13923734567</div>
          </Card.Grid>
          <Card.Grid xs={6} sm={4} xl={3} style={{ boxShadow: 'none', padding: 0 }}>
            <div className={styles.label}>座机</div>
            <div className={styles.value}>734567</div>
          </Card.Grid>
          <Card.Grid xs={6} sm={4} xl={3} style={{ boxShadow: 'none', padding: 0 }}>
            <div className={styles.label}>办公室邮箱</div>
            <div className={styles.value}>Account@qq.com</div>
          </Card.Grid>
          <Card.Grid xs={6} sm={4} xl={3} style={{ boxShadow: 'none', padding: 0 }}>
            <div className={styles.label}>座位</div>
            <div className={styles.value}>T32F 012</div>
          </Card.Grid>
          <Card.Grid xs={6} sm={4} xl={3} style={{ boxShadow: 'none', padding: 0 }}>
            <div className={styles.label}>管理主体</div>
            <div className={styles.value}>腾讯集团</div>
          </Card.Grid>
          <Card.Grid xs={6} sm={4} xl={3} style={{ boxShadow: 'none', padding: 0 }}>
            <div className={styles.label}>直属上级</div>
            <div className={styles.value}>Account@qq.com</div>
          </Card.Grid>
          <Card.Grid xs={6} sm={4} xl={3} style={{ boxShadow: 'none', padding: 0 }}>
            <div className={styles.label}>职称</div>
            <div className={styles.value}>高级 UI 设计师</div>
          </Card.Grid>
          <Card.Grid xs={6} sm={4} xl={3} style={{ boxShadow: 'none', padding: 0 }}>
            <div className={styles.label}>入职时间</div>
            <div className={styles.value}>2021-07-01</div>
          </Card.Grid>
          <Card.Grid span={12} style={{ boxShadow: 'none', padding: 0 }}>
            <div className={styles.label}>所属团队</div>
            <div className={styles.value}>腾讯/腾讯公司/某事业群/某产品部/某运营中心/商户服务组</div>
          </Card.Grid>
        </Card>
        <Card borded={false} className={styles.statistics} tabList={TABLIST} headStyle={{ borderBottom: 0 }}>
          <div className={styles.title}>
            主页访问数据
            <span className={styles.unit}>（次）</span>
          </div>
          <ReactEcharts
            option={{
              tooltip: {
                trigger: 'axis',
              },
              legend: {
                data: ['杯子', '茶叶', '蜂蜜', '面粉'],
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
              },
              toolbox: {
                feature: {
                  saveAsImage: {},
                },
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
              },
              yAxis: {
                type: 'value',
              },
              series: [
                {
                  name: '杯子',
                  type: 'line',
                  data: [21, 99, 56, 66, 55, 7, 83],
                },
                {
                  name: '茶叶',
                  type: 'line',
                  data: [84, 30, 70, 14, 19, 75, 73],
                },
                {
                  name: '蜂蜜',
                  type: 'line',
                  data: [57, 3, 25, 13, 49, 80, 11],
                },
                {
                  name: '面粉',
                  type: 'line',
                  data: [8, 85, 2, 77, 10, 65, 90],
                },
              ],
            }} // option：图表配置项
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 360, marginTop: 16 }}
          />
        </Card>
      </Col>
      <Col xs={12} lg={12} xl={3}>
        <Card borded={false} className={styles.postmsg}>
          <div className={styles.avatar}>
            <span>T</span>
          </div>
          <div className={styles.name}>My Account</div>
          <div className={styles.position}>XXG 港澳业务拓展组员工 直客销售</div>
        </Card>
        <Card
          className={styles.teams}
          borded={false}
          title='团队成员'
          extra={
            <Button shape='square' theme='default' variant='text'>
              <IconFont name='edit' />
            </Button>
          }
        >
          <List split={false}>
            {TEAMS.map((item) => (
              <ListItem key={item.id}>
                <ListItemMeta title={item.name} description={item.position} />
              </ListItem>
            ))}
          </List>
        </Card>
        <Card
          borded={false}
          title='服务产品'
          className={styles.product}
          extra={
            <Button shape='square' theme='default' variant='text'>
              <IconFont name='edit' />
            </Button>
          }
        >
          <Row gutter={32}>
            <Col>
              <img src='https://tdesign.gtimg.com/pro-template/tdesign-icon1.png' className={styles.logo} />
            </Col>
            <Col>
              <img src='https://tdesign.gtimg.com/pro-template/tdesign-icon2.png' className={styles.logo} />
            </Col>
            <Col>
              <img src='https://tdesign.gtimg.com/pro-template/tdesign-icon3.png' className={styles.logo} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
);

export default memo(User);
