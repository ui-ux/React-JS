type InputProps = {
  value: string
  onValueChange: (value: string) => void
  clickMessage: string
}

function Input({ value, onValueChange, clickMessage }: InputProps) {
  const handleClick = () => {
    console.log('Component input clicked!');
    console.log(clickMessage);
  }

  return (
    <input
      value={value}
      onChange={(event) => onValueChange(event.target.value)}
      onClick={handleClick}
    />
  )
}

export default Input
