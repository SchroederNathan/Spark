import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
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
            Sign up to Spark
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
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
              Already have an account?
            </Text>
            <Link href={"/sign-in"} className="text-accent font-psemibold">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
