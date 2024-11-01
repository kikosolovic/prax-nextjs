type Props = {
  onClick: any
  children: any
}

export function MyButton(props: Props) {
  return (
    <button onClick={props.onClick} className="btn btn-sm btn-outline">
      {props.children}
    </button>
  )
}
