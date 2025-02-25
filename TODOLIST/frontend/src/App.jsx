import { useState, useEffect } from "react"
import axios from "axios";

function App() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/todos')
      console.log(response.data);
      setTodoList(response.data.todos )
      setLoading(false)
    } catch (error) {
      console.log('Error fetching todos:', error)
      setLoading(false)
    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/addtodo',{
        todo: todoText
      })
      setTodoList([...todoList, response.data.todo]);
      setTodoText('');
    }catch(error){
      console.log('Error adding todo:', error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Todo App
        </h1>
        <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value = {todoText}
            onChange={(e)=>setTodoText(e.target.value)}
            placeholder="Enter your todo"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add todo
          </button>
          </div>
        </form>

        <div className="space-y-3">
          {loading ? (
            <div className="text-center py-10 text-gray-500">
              Loading todos...
            </div>
          ) : (
            <>
              {todoList.map((todo,index)=>(
                <div
                  key = {index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                <p className="text-gray-800">{todo.todo}</p>
                </div>
              ))}
              {/* empty state */}
              {todoList.length === 0 &&(
                <div className="text-center py-10 text-gray-500">
                  No todos yet. Add one above!
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
