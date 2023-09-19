import { Alert } from "react-native";

const showError = (err) => {
    Alert.alert(
        "Ошибка",
        `При выполнении действия произошла следующая ошибка \n${err}`,
        [
          {
            text: "OK",
          },
        ],
        { cancelable: false }
      );
}

export default showError;