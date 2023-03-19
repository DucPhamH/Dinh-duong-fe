export const rules = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài là 5-160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài là 5-160 kí tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài là 5-160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài là 5-160 kí tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài là 5-160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài là 5-160 kí tự'
    }
  }
}
