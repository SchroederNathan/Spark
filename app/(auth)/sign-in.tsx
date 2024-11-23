import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const submit = () => {
    // console.log(form);
  };
  return (
    <SafeAreaView className="bg-background min-h-[85vh]">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-text text-5xl font-pbold ">Spark.</Text>
          <Text className="text-2xl text-text font-psemibold mt-10">
            Log in to Spark
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={submitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-text text-lg text-seondary font-pregular">
              Don't have an account?
            </Text>
            <Link href={"/sign-up"} className="text-accent font-psemibold">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
