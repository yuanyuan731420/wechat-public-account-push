/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb0c28f3ed390ab81',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '24349f3dcdca6594d968b2d9093e71e3',

  PROVINCE: '吉林',
  CITY: '长春',

  USERS: [
    {
      // 想要发送的人的名字
      name: '禹哥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqzUQ60ohBob70Svq90JZva54TPI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'WQIrgpDcZBLNxMUPQUzfH4HBvEu7pidgdlyE1xzccwQ',
   
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小鱼', year: '1999', date: '03-10',
        },
        {
          type: '生日', name: '圆圆', year: '1998', date: '09-17',
        },
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-01-09' },
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'WQIrgpDcZBLNxMUPQUzfH4HBvEu7pidgdlyE1xzccwQ',

  CALLBACK_USERS: [
    {
      name: '圆圆',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqzUQ60ohBob70Svq90JZva54TPI',
    }
  ],

}

module.exports = USER_CONFIG

