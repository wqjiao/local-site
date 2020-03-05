import AsyncValidator from 'async-validator';

// 校验规则
const descriptor = {
    username: [
        {
            required: true,
            message: '请填写用户名'
        },
        {
            min: 3,
            max: 10,
            message: '用户名长度为3-10'
        }
    ]
}
// 根据校验规则构造一个 validator
const validator = new AsyncValidator(descriptor);
const data = {
    username: 'username'
}

validator.validate(model, (errors, fields) => {
    console.log(errors)
});
