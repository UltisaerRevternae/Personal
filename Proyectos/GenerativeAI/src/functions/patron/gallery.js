const patron = {
  '2': [
    ['wide normal_mobile', 'normal'],
    ['normal  wide_mobile', 'wide'],
    ['big', 'tall wide_mobile'],
    ['tall tall_mobile', 'big tall_mobile'],
  ],
  '3': [
    ['big', 'normal', 'normal'],
    ['normal', 'normal tall_mobile', 'normal'],
    ['tall', 'tall', 'tall wide_mobile'],
    ['tall', 'wide normal_mobile', 'wide normal_mobile'],
    ['wide', 'wide', 'tall wide_mobile']
  ],
  '4': [
    ['big', 'normal', 'tall normal_mobile', 'wide'],
    ['tall', 'big normal_mobile', 'normal', 'wide'],
    ['wide', 'tall', 'normal', 'normal'],
    ['tall', 'wide normal_mobile', 'big tall_mobile', 'normal']
  ],
  '8': [
    ['wide', 'normal', 'tall', 'tall', 'normal', 'big', 'tall', 'normal tall_mobile'],
    ['normal wide_mobile', 'tall', 'big', 'normal', 'tall', 'tall', 'normal', 'wide']
  ],
  '9': [
    ['tall', 'wide', 'normal', 'tall', 'normal', 'tall', 'normal tall_mobile', 'tall', 'wide'],
  ]

}

const gallery = () => {
  return patron
}

export { gallery }