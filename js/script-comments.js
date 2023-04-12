// validate form
let validation4 = new JustValidate('#form4', {
  errorLabelStyle: {
    color: '#FF5C00'
  }
})

let selector = document.querySelector("#tel")
let im = new Inputmask("+7 (999) 99-99-999")
im.mask(selector)

validation4.addField("#surname", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели фамилию'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа'
  },
])

validation4.addField("#name", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа'
  },
])

validation4.addField("#street", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели улицу'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа'
  },
])

validation4.addField("#house", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели номер дома'
  },
  {
    rule: 'minLength',
    value: 1,
    errorMessage: 'Должно быть не менее 1 цифры'
  },
])

validation4.addField("#room", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели номер квартиры'
  },
  {
    rule: 'minLength',
    value: 1,
    errorMessage: 'Должно быть не менее 1 цифры'
  },
])

validation4.addField("#tel", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели телефон'
  },
  {
    validator: (value) => {
      const tel = selector.inputmask.unmaskedvalue();
      return Boolean(Number(tel) && tel.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  },
])

validation4.addField("#email", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели email'
  },
  {
    rule: 'email',
    errorMessage: 'Ошибка в почте'
  },
])

validation4.addField("#comments", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели текст отзыва'
  },
])
