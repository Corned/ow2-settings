const Page = ({ children }) => {
  return (
    <div className="page">
      <div className="option-list">
        { children }
      </div>
    </div>
  )
}

export default Page