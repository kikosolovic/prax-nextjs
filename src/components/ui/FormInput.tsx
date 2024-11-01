type Props = {
  inputProps: Record<string, any>
}

export function FormInput(props: Props) {
  return <input {...props.inputProps} className="input input-bordered input-primary" />
}
