


function App() {

const feedback = [
  {id: 1, rating: 1, text: "Text 1"},
  {id: 2, rating: 1, text: "Text 2"},
  {id: 3, rating: 1, text: "Text 3"}
]

  return (
    <div>
      Привіт, Всесвіте!
      <p>
{JSON.stringify(feedback)}

      </p>
    </div>
  )
}

export default App
