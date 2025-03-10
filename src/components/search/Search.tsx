interface SearchProps {
  mySearch: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = (props: SearchProps) => {
  return (
    <div>
      <input
        onChange={props.handleChange}
        type="text"
        placeholder="Search..."
      />
    </div>
  )
}

export default Search
