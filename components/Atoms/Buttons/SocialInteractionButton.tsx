import { useTheme } from "@rneui/themed";
import { Button, ButtonProps, Icon } from "@rneui/base";

interface IProps extends ButtonProps{
    title: string;
    iconType?: string;
    name: string;
    color?: string;
}
const SocialInteractionButton = (props: IProps) => {
  const {theme} = useTheme()
  return (
    <Button
      icon={{
        name: props.name,
        type: props.iconType? props?.iconType: "font-awesome",
        size: 22,
        color: props.color? props?.color: theme.colors.text,
      }}
      buttonStyle={{backgroundColor: 'transparent', width: 'auto', gap: 5}}
      titleStyle={{color: props.color? props?.color : theme.colors.text}}
      onPress={props.onPress}
      testID="social-interaction-button"
    > 
      {props.title}
    </Button>
  );
};

export default SocialInteractionButton;
