/* 将列表型数据转化为树形数据 */
export function tranListToTreeData(params, rootValue) {
  var arr = []
  params.forEach(element => {
    if (element.pid == rootValue) {
      const children = tranListToTreeData(params, element.id)
      if (children.length) {
        element.children = children
      }
      arr.push(element)
    }
  })
  return arr
}



