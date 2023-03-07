interface Props {
    title: string
}

export default function TitlePage({ title }: Props) {
  return <h1 className="text-3xl font-semibold mb-4">{title}</h1>
}
