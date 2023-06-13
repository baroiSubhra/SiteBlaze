function debounce(fn, timeout = 500) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    const context = this
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, timeout)
  }
}

export { debounce }
