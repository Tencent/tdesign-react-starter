import React from 'react';
import { Input, Tree } from 'tdesign-react';
import PageBox from 'components/PageBox';
import { SelectTable } from '../Select/index';
import { treeList } from './consts';
import Style from './index.module.less';
import { SearchIcon } from 'tdesign-icons-react';

const TreeTable: React.FC = () => (
  <PageBox className={Style.content}>
    <div className={Style.treeContent}>
      <Input className={Style.search} suffixIcon={<SearchIcon />} placeholder='请输入关键词' />
      <Tree data={treeList} activable hover transition />
    </div>
    <div className={Style.tableContent}>
      <SelectTable />
    </div>
  </PageBox>
);

export default TreeTable;
