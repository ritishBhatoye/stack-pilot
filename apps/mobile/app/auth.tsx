import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { StatusBar } from "expo-status-bar";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain uppercase, lowercase, number, and special character"
    )
    .required("Password is required"),
});

export default function AuthScreen() {
  const handleSubmit = async (values: { email: string; password: string }) => {
    Alert.alert("Success", `Welcome, ${values.email}!`);
  };

  const handleSocialLogin = (provider: string) => {
    Alert.alert("Social Login", `${provider} login would be implemented here`);
  };

  return (
    <View className="flex-1 bg-white px-6 py-12">
      <StatusBar style="auto" />
      <Text className="text-3xl font-bold text-gray-900 mb-2">
        Welcome Back
      </Text>
      <Text className="text-gray-600 mb-8">
        Sign in to continue to your account
      </Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">
                Email
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 text-base"
                placeholder="Enter your email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
              {touched.email && errors.email && (
                <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>
              )}
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">
                Password
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 text-base"
                placeholder="Enter your password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="password"
              />
              {touched.password && errors.password && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.password}
                </Text>
              )}
            </View>

            <TouchableOpacity
              onPress={() => handleSubmit()}
              className="bg-blue-600 py-4 rounded-lg mt-6"
            >
              <Text className="text-white font-semibold text-center text-lg">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <View className="mt-8">
        <View className="flex-row items-center mb-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">OR</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        <TouchableOpacity
          onPress={() => handleSocialLogin("Google")}
          className="border-2 border-gray-300 py-4 rounded-lg mb-4"
        >
          <Text className="text-gray-900 font-semibold text-center text-lg">
            Continue with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSocialLogin("Apple")}
          className="bg-black py-4 rounded-lg"
        >
          <Text className="text-white font-semibold text-center text-lg">
            Continue with Apple
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
