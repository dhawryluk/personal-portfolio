
const PrimaryButton = () => {
  return (
    <button className="bg-softFern rounded-md p-2 ring-2 ring-white hover:bg-deepForestGreen hover:ring-2 hover:ring-offWhite transition-all duration-300">
      <slot>Click Here</slot>
    </button>
      )
}

export default PrimaryButton