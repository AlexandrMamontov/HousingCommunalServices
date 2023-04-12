// validate form
let validation3 = new JustValidate('#form3', {
  errorLabelStyle: {
    color: '#FF5C00'
  }
})

let selector = document.querySelector("#tel")
let im = new Inputmask("+7 (999) 99-99-999")
im.mask(selector)

validation3.addField("#surname", [
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

validation3.addField("#name", [
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

validation3.addField("#street", [
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

validation3.addField("#house", [
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

validation3.addField("#room", [
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

validation3.addField("#tel", [
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

validation3.addField("#email", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели email'
  },
  {
    rule: 'email',
    errorMessage: 'Ошибка в почте'
  },
])

validation3.addField("#request", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели текст заявки'
  },
])
