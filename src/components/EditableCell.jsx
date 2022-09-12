import Input from './Input';

const EditableCell = ({ onDoubleClick, onInput, onBlur, editable, value }) => {
    return (
        <td className="todo-title" onDoubleClick={onDoubleClick}>
            {editable ? (
                <Input
                    className="full-w"
                    onInput={onInput}
                    onBlur={onBlur}
                    immidiateFocus={true}
                    value={value}
                />
            ) : (
                value
            )}
        </td>
    );
};

export default EditableCell;
