


const GoalModal = ({isOpen, OnClose, OnGoalCreated}:{ isOpen: boolean, onClose: () => void, onGoalCreated: (goal: Goal) => void }) => {
  const handleSubmit = async(e: any) =>{
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  )
}

export default GoalModal
