
import Avatar from '@/components/avatar'
import Button from '@/components/Button'
import { useAuthStore } from '@/utils/authStore'
import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { supabase } from '../../utils/supabase'

export default function Account() {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const {logOut} = useAuthStore();

  const session = useAuthStore((state) => state.session);

  useEffect(() => {
    if (session) {
        getProfile()
    } else{
        console.log("no session");
    }
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single()
      if (error && status !== 406) {
        console.log("no data")
        throw error
      }

      if (data) {
        console.log(data)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string
    website: string
    avatar_url: string
  }) {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      const { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function signOut() {
    console.log("signing out")
    supabase.auth.signOut();
    logOut();
  }

  return (
    <View style={styles.container}>
        <View>
            <Avatar
                size={200}
                url={avatarUrl}
                onUpload={(url: string) => {
                setAvatarUrl(url)
                updateProfile({ username, website, avatar_url: url })
                }}
            />
        </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput placeholder="Email" value={session?.user?.email} style={styles.textInput} />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput placeholder="Username" value={username || ''} onChangeText={(text) => setUsername(text)} style={styles.textInput}/>
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput placeholder="Website" value={website || ''} onChangeText={(text) => setWebsite(text)} style={styles.textInput}/>
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          name={loading ? 'Loading ...' : 'Update'}
          onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
          style={styles.button}
          />
      </View>

      <View style={styles.verticallySpaced}>
        <Button name="Sign Out" onPress={signOut} style={styles.button} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    backgroundColor:'rgb(22, 13, 0)',
    flex:1
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'rgb(190, 109, 2)',
    color:'white',
    height:45,
    width:250,
    borderRadius:18,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  },
  textInput:{
    backgroundColor: 'rgb(190, 109, 2)',
    color:'white',
    height:45,
    width:300,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:15
  }
})