import {Control, Controller} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';

import colors from '../../theme/colors';
import styles from './styles';
import {User} from '../../API';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
export type IEditableUser = Pick<User, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value || ''}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              multiline={multiline}
              placeholderTextColor={colors.grey}
            />
            {error && (
              <Text style={{color: colors.error}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

export default CustomInput;
