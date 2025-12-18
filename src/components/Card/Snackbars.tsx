import { SnackbarProvider, useSnackbar, type VariantType } from 'notistack';
import styles from './Card.module.scss';

interface SnackbarProps {
  onClickPlus: () => void;
}

const Snackbar = ({ onClickPlus }: SnackbarProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
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
};

interface SnackbarsProps {
  onClickPlus: () => void;
}

const Snackbars = ({ onClickPlus }: SnackbarsProps) => {
  return (
    <div className={styles.SnackbarBlock}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
      >
        <Snackbar onClickPlus={onClickPlus} />
      </SnackbarProvider>
    </div>
  );
};

export default Snackbars;
