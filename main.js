class UI {
  animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down')

    arrows.forEach((arrow) => {
      arrow.addEventListener('click', () => {
        const input = arrow.previousElementSibling
        const parent = arrow.parentElement
        const nextForm = parent.nextElementSibling

        if (input.type === 'text' && this.validateuser(input)) {
          console.log('looks good')
          this.nextSlide(parent, nextForm)
        } else if (input.type === 'email' && this.validateEmail(input)) {
          this.nextSlide(parent, nextForm)
        } else if (
          input.type === 'password' &&
          input.id === 'conformPassword' &&
          this.validateConformPassword(input, parent)
        ) {
          this.nextSlide(parent, nextForm)
        } else if (input.type === 'password' && this.validatePassword(input)) {
          this.nextSlide(parent, nextForm)
        } else {
          parent.style.animation = 'shake 0.5s ease'
        }
        // get rid of animation

        parent.addEventListener('animationend', () => {
          parent.style.animation = ''
        })
      })
    })
  }

  validateuser(user) {
    console.log(user.value.length)
    if (user.value.length < 6) {
      this.error('rgb(189, 87, 87)')
      console.log('wrong input')
    } else {
      this.error(' rgb(87, 189, 130)')
      return true
    }
  }
  validateEmail(email) {
    console.log(email.value)
    const validation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (validation.test(email.value)) {
      this.error(' rgb(87, 189, 130)')
      console.log('looks all good')

      return true
    } else {
      console.log('looks bad')

      this.error('rgb(189, 87, 87)')
      return false
    }
  }
  validatePassword(password) {
    console.log(password.value)

    if (password.value.length < 8) {
      this.error('rgb(189, 87, 87)')
    } else {
      this.error(' rgb(87, 189, 130)')
      return true
    }
  }
  validateConformPassword(password, pastPassword) {
    if (
      password.value.length > 8 &&
      password.value ===
        pastPassword.previousElementSibling.firstElementChild.nextElementSibling
          .value
    ) {
      this.error(' rgb(87, 189, 130)')
      return true
    } else {
      this.error('rgb(189, 87, 87)')
    }
  }

  nextSlide(parent, nextForm) {
    parent.classList.add('inactive')
    parent.classList.remove('active')
    nextForm.classList.add('active')
  }

  error(color) {
    document.body.style.background = color
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let ui = new UI()
  ui.animatedForm()
})
