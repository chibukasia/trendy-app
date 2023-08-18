import { Avatar, Button } from "@rneui/base";
import { makeStyles, useTheme } from "@rneui/themed";
import { Text, View } from "react-native";

interface IProps {
    name: string;
    description: string;
    profileUrl: string;
    onEdit: ()=>void;
}
const ProfileCard = (props: IProps) => {
  const {name, description, profileUrl, onEdit} = props
  const styles = useStyles();
  const {theme} = useTheme()
  return (
        <View style={styles.cardViewStyle}>
          <View style={styles.profileStyles} testID="avatar-image">
            <Avatar
              source={{
                uri: profileUrl,
              }}
              rounded
              size={75}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "700", textAlign: 'center', color: theme.colors.text }}>
                {name}
              </Text>
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: theme.colors.grey4, textAlign: 'center' }}
              >
                {description}
              </Text>
            </View>
            <View style={styles.editViewStyles}>
                <Button 
                  title={'Edit'} 
                  buttonStyle={styles.buttonStyles} 
                  titleStyle={{color: theme.colors.stroke, fontSize:12}} 
                  icon={{
                    name: 'edit', 
                    type: 'material-icons',
                    size: 12,
                    color: theme.colors.stroke,
                  }}
                  iconRight
                  iconContainerStyle={{marginLeft: 10}}
                  onPress={onEdit}
                  />
            </View>
          </View>        
        </View>
  );
};

export default ProfileCard;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  cardViewStyle: {
    backgroundColor: theme.colors.background,
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
    borderRadius: 20,
    borderWidth: 0,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset:{
        width: 0,
        height:10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    height: 110,
    position: 'relative',
    justifyContent: 'center',
  },
  profileStyles: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    position: 'absolute',
    top: -20,
  },
  editViewStyles: {
    flexDirection: "column",
    alignItems: "flex-end",
    position: 'absolute',
    right: 20,
    top: 35,
  },
  buttonStyles:{
    margin: 0,
    padding: 0,
    backgroundColor:'transparent',
  }
}));
