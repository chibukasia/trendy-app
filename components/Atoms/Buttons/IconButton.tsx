import { useTheme, makeStyles } from "@rneui/themed";
import { Button } from "@rneui/base";
import React from "react";

interface Props {
  backgroundColor?: string;
  color?: string;
  title?: string;
  name: string;
  iconType?: string;
  width?: string | number;
  disabled?: boolean;
  height?: number;
  onPress: () => void;
}
const IconButton = (props: Props) => {
  const { title, name, iconType, onPress } = props;
  const styles = useStyles(props);
  const {theme} = useTheme()
  return (
      <Button
        title={title?title: ''}
        titleStyle={styles.titleStyle}
        icon={{
          name: name,
          type: iconType ? iconType : "ionicons",
          size: 22,
          color: props.color ? props?.color : theme.colors.white,
        }}
        iconContainerStyle={styles.iconStyle}
        buttonStyle={styles.buttonStyle}
        onPress={onPress}
        testID="icon-button"
      />
  );
};

export default IconButton;

const useStyles = makeStyles((theme, props: Props) => ({
  buttonStyle: {
    backgroundColor: props.backgroundColor
      ? props?.backgroundColor
      : props.disabled
      ? theme.colors.disabled
      : theme.colors.primary,
    borderRadius: 8,
    width: props.width ? props?.width : 175,
    height: props.height ?? 45,
  },
  titleStyle: {
    color: props.color ? props.color : theme.colors.white,
  },
  iconStyle: {
    marginRight: 20,
  },
}));
