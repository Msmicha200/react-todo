import styles from './Table.module.scss';
import { useState } from 'react';
import EditableCell from '../EditableCell';
import PropTypes from 'prop-types';

const Table = ({ items, attrs, onChange, onEditFinished }) => {
    const [editPos, setEditPos] = useState({});
    const keys = Object.keys(attrs);

    const onCellInput = (event, item, key) => {
        item[key] = event.target.value;
        onChange(item);
    };
    const tableRow = (row, rowIdx) => (
        <tr key={rowIdx}>
            {keys.map((key, keyIdx) =>
                attrs[key].edit ? (
                    <EditableCell
                        key={key}
                        onDoubleClick={() =>
                            setEditPos({
                                y: rowIdx,
                                x: keyIdx,
                            })
                        }
                        value={row[key]}
                        editable={editPos.y === rowIdx && editPos.x === keyIdx}
                        onInput={(event) => onCellInput(event, row, key)}
                        onBlur={() => onEditFinished(row)}
                    />
                ) : (
                    <td key={key}>{row[key]}</td>
                )
            )}
        </tr>
    );

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {keys.map((key) => (
                        <th key={key}>{attrs[key].title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{items.map((row, rowIdx) => tableRow(row, rowIdx))}</tbody>
        </table>
    );
};

Table.propTypes = {
    attrs: PropTypes.objectOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            edit: PropTypes.bool,
        })
    ).isRequired,
};

export default Table;
