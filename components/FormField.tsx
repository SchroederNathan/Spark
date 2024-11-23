import { icons } from "@/constants";
import React, { useState } from "react";
import {
  Image,
  KeyboardType,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardType;
};

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-text/75 font-pmedium">{title}</Text>
      <View
        className={`w-full h-16 px-4 mt-2 bg-input rounded-2xl border-[1px] ${
          isFocused ? "border-accent" : "border-transparent"
        } flex-row items-center`}
      >
        <TextInput
          className="flex-1 text-text font-psemibold text-base "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
