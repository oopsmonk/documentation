# Verify your Trinity Mobile APK download

**To support Android users who do not use the Google Play Store, the IOTA Foundation provides APKs that can be directly downloaded to your device. When you download the Trinity Mobile APK, you may want to verify its authenticity to make sure that you downloaded the correct one from the IOTA Foundation GitHub repository. In this tutorial, you learn how to verify Trinity Mobile APK downloads.**

:::warning:
Installing Android apps, or APKs, from sources outside of the Play Store is dangerous. It is much easier to impersonate legitimate apps when they are distributed outside of the Play Store. When in doubt, you should download Trinity from the [Play Store](https://play.google.com/store/apps/details?id=com.iota.trinity). The following instructions are for advanced users that are comfortable with the increased risk of downloading APKs from sources other than the Play Store.
:::

:::danger:
On 11 February 2020, the IOTA Foundation became aware of an attack on the Trinity wallet, during which some users’ seeds and Trinity passwords were compromised. Please check our advice for [protecting your Trinity account](../how-to-guides/protect-trinity-account.md).
:::

To verify the authenticity of Trinity Mobile for Android, you can check its SHA256 hash and its code signature. Instructions for both of these steps differ--verification of the SHA256 hash can be done from your Android device, but a computer is required in order to verify the code signature.

### Verify the SHA256 hash

1. Go to https://www.sisik.eu/hash.

2. Select "SHA256" for "Hash algorithm".

3. Select the Trinity APK and upload it.

4. Compare your SHA256 hash with the one in the [release notes](https://github.com/iotaledger/trinity-wallet/releases) and make sure that they match

### Verify the code signature

#### Prerequisites
To follow these instructions you will need a computer with [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) installed.

1. Download the Trinity APK to your computer

2. Open a command-line interface such as Terminal or PowerShell.

3. Verify the signature of the Trinity APK, replacing the path with the path to your Trinity APK on your computer:
```bash
keytool -printcert -jarfile path/to/trinity.apk
```

For example, if the APK is in `~/Downloads`:
```bash
keytool -printcert -jarfile ~/Downloads/app-release-bitrise-signed.apk
```

4. Make sure that the following information matches the output of the command:

```
Owner: CN=Giorgio Mandolfo, OU=IT Operations, O=IOTA Foundation, L=Berlin, ST=Berlin, C=DE
Issuer: CN=Giorgio Mandolfo, OU=IT Operations, O=IOTA Foundation, L=Berlin, ST=Berlin, C=DE
Certificate fingerprints:
	 MD5:  3B:C4:02:55:80:37:FE:88:1C:6E:64:E6:A8:B0:11:BB
	 SHA1: B9:6D:12:F1:FD:08:B8:72:B6:F3:C8:E6:AA:DA:F3:DE:04:86:85:08
	 SHA256: EA:A0:9D:0F:A3:88:79:F4:A8:09:88:EC:B2:A8:75:C2:7E:54:15:85:72:80:11:63:A5:6B:55:44:DB:67:E6:CD
```

## Next steps

[Create a Trinity account](../how-to-guides/create-an-account.md).
