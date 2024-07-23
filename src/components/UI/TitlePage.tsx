interface NameProp {
    name: string;
}

const TitlePage: React.FC<NameProp> = ({name}) => {
  return (
    <div className="text-[48px] font-medium">
        {name}
    </div>
  )
}

export default TitlePage