import { Link } from 'react-router-dom'
interface AsideProps {
  onClick: (language: string) => void
  language: string
  activeLanguage: string
}


const Aside = ({
  ...props
}: AsideProps
  
) => {
  const languages = ['Español', 'English', 'Deutsch', 'Italiano', 'Français'] 


  return (
    <aside
    >
      <h2>Book languages</h2>
      <div className={`
        language-btn
      `}
      >
        {languages.map((lang, index) => (
          <button
            key={index}
            onClick={() => props.onClick(lang)}
            style={{
              backgroundColor: lang === props.activeLanguage ? 'black' : '',
              
            }}
          >
            {lang}
          </button>
        ))}

        <Link to="/wishlist">
          <button
            style={{
              backgroundColor: '#82a58e',
              color: '#2a2a2a',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >Wishlist</button>
        </Link>
      </div>
    </aside>
  )
}

export default Aside
