import { SnackbarProvider, useSnackbar } from 'notistack';

import styles from './Card.module.scss';

function Snackbar({ onClickPlus }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Товар додано в кошик!', { variant });
    onClickPlus();
  };

  return (
    <img
      className={styles.plus}
      src="/img/btn-plus.svg"
      alt="btn-plus"
      onClick={handleClickVariant('success')}
    />
  );
}

export default function Snackbars({ onClickPlus }) {
  return (
    <div className={styles.SnackbarBlock}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
        // style={{ backgroundColor: 'yellow' }}
      >
        <Snackbar onClickPlus={onClickPlus} />
      </SnackbarProvider>
    </div>
  );
}
