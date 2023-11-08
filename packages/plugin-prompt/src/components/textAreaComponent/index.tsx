import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useState } from 'react';
import { PopUpContext } from '../../contexts/popUpContext';
import { TextAreaComponentType } from '../../types/components';
import { TypeModal } from '../../utils';

export default function TextAreaComponent({
  value,
  onChange,
  disabled,
  editNode = false,
}: TextAreaComponentType) {
  const [myValue, setMyValue] = useState(value);
  const { openPopUp } = useContext(PopUpContext);
  useEffect(() => {
    if (disabled) {
      setMyValue('');
      onChange('');
    }
  }, [disabled, onChange]);
  return (
    <div className={disabled ? 'pointer-events-none cursor-not-allowed' : ''}>
      <div className="w-full flex items-center gap-3">
        <span
          onClick={() => {
          }}
          className={
            editNode
              ? 'h-7 truncate placeholder:text-center text-gray-500 border-0 block w-full pt-0.5 pb-0.5 form-input dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 rounded-md border-gray-300 shadow-sm sm:text-sm focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-200'
              : `truncate block w-full text-gray-500 dark:text-gray-100 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm${
                disabled ? ' bg-gray-200' : ''}`
          }
        >
          {myValue !== '' ? myValue : 'Text empty'}
        </span>
        <button
          onClick={() => {
          }}
        >
          {!editNode && (
            <ArrowTopRightOnSquareIcon className="w-6 h-6 hover:text-blue-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
}
