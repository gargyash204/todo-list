interface TodoHeaderProps {
  inputFieldShow: boolean;
  showInputField: (status: boolean) => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ inputFieldShow, showInputField }) => {
  return (
    <div className="card-header">
      <div className="d-flex justify-content-between">
        <div>Todo List</div>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => showInputField(!inputFieldShow)}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;
