type Props = {
  value: string
}

export function FormSubmitButton(props: Props) {
  return <input type="submit" value={props.value} className="btn btn-primary" />
}
