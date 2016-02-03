
const HeaderMonth = () => {

  const currentDate = new Date()
  , months          = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  , monthHeader     = months[currentDate.getMonth()]

  return monthHeader

}

export default HeaderMonth
