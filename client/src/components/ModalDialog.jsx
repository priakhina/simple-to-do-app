import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const ModalDialog = ({
  open,
  setOpen,
  dialogTitle,
  dialogText,
  confirmButtonText,
  onConfirmDelete,
}) => {
  const handleConfirmClick = () => {
    setOpen(false);
    onConfirmDelete();
  };

  return (
    <Dialog open={open} onClose={setOpen} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500/75 dark:bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <DialogPanel
            transition
            className='relative transform overflow-hidden rounded-lg bg-white dark:bg-[#25273D] text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95'
          >
            <div className='bg-white dark:bg-[#25273D] px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10'>
                  <ExclamationTriangleIcon
                    aria-hidden='true'
                    className='size-6 text-red-600 dark:text-red-400'
                  />
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <DialogTitle
                    as='h3'
                    className='text-base font-semibold text-[#494C6B] dark:text-[#C8CBE7]'
                  >
                    {dialogTitle}
                  </DialogTitle>
                  <div className='mt-2 whitespace-pre-line'>
                    <p className='text-md text-[#9495A5] dark:text-[#5B5E7E]'>
                      {dialogText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                type='button'
                onClick={handleConfirmClick}
                className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 dark:hover:bg-red-400 sm:ml-3 sm:w-auto'
              >
                {confirmButtonText}
              </button>
              <button
                type='button'
                data-autofocus
                onClick={() => setOpen(false)}
                className='mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-white/10 px-3 py-2 text-sm font-semibold text-[#494C6B] dark:text-[#C8CBE7] shadow-xs inset-ring inset-ring-gray-300 dark:inset-ring-white/5 hover:bg-gray-50 dark:hover:bg-white/20 sm:mt-0 sm:w-auto'
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalDialog;
