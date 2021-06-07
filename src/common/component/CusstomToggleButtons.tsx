import React, { ReactElement } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const LOCKED = 'locked';
const UNLOCKED = 'unlocked';

const CusstomToggleButtons = (props: { onChange?: (isLocked: boolean) => void }): ReactElement => {
  const { onChange } = props;
  const [alignment, setAlignment] = React.useState<string>(LOCKED);

  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, newAlignment: string): void => {
    // 未選択は許可しない。未選択の場合、nullでセットされている
    if (!newAlignment) return;

    setAlignment(newAlignment);
    if (onChange) onChange(newAlignment === LOCKED);
  };

  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
      <ToggleButton value={LOCKED} aria-label={LOCKED}>
        ロック
      </ToggleButton>
      <ToggleButton value={UNLOCKED} aria-label={UNLOCKED}>
        解除
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CusstomToggleButtons;
