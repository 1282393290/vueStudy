import Mock from 'mockjs'

Mock.mock(/\.json/, {
  "data|1-10": [{name:"@cname"}]
})
