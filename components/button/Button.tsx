type ButtonProps = {
  bgColor: string
  text: string
  onClick: () => void
}
const Button = ({ bgColor, text, onClick }: ButtonProps) => {
  return (
    <div
      className={`bg-${bgColor} rounded-lg px-10 py-7 text-center cursor-pointer`}
      onClick={onClick}
    >
      <p className={`text-$t2 text-$shade3`}>{text}</p>
    </div>
  )
}

export default Button
