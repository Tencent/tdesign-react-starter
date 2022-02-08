export const total = 6;
const listItems: {
  content: string;
  tag: string;
  createTime: string;
}[] = [];
for (let i = 0; i < total; i++) {
  listItems.push({
    content: '腾讯大厦一楼改造施工项目 已通过审核！',
    tag: '合同动态',
    createTime: '2021-12-30 10:43:56',
  });
}
export const dataItemList = listItems;
