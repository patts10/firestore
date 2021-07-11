#Referencia al document
const usuariosRef =db.collection('usuarios');

#Insert into usuarios...
db.collection('usuarios')
  .add( usuario )
  .then( docRef => {
      console.log( docRef );
    })
    .catch( e => console.log( 'error', e ))
  
  Update usuarios set activo = false where...
  usuariosRef
    .doc('kMNjgMX4Udavc50rFqLl')
    .update({
      activo: true
    });
  
  Destructivo
    usuariosRef
    .doc('kMNjgMX4Udavc50rFqLl')
    .set({
      activo: true,
      edad: 31,
      nombre: 'patts'
    });

    delete from usuarios where id = 'xx'
  usuariosRef
    .doc('kMNjgMX4Udavc50rFqLl')
    .delete()
    .then( () => console.log('Borrado') )
    .catch( e => console.log('error', e) )

  select * from usuarios;
  usuariosRef
  .onSnapshot( snap => {
    
      retornaDocumentos( snap );
    
    })
    usuariosRef
    .onSnapshot( retornaDocumentos );
    
    usuariosRef
    .get().then( retornaDocumentos );
    
    Select * from usuarios
      where activo = true
    
    usuariosRef.where('activo','==', true).get().then( retornaDocumentos );
    
    
    Select * from usuarios
      where salario > 1800
    usuariosRef.where('salario','>', 1800)
    .get().then( retornaDocumentos );
    
    Select * from usuarios
      where salario > 1800 and salario < 2300
    usuariosRef.where('salario','>', 1800)
      .where('salario','>', 1800)
      .get().then( retornaDocumentos );
    
      Select * from usuarios
      where salario > 1800 
         and active == true
    usuariosRef.where('salario','>', 1800)
      .where('activo','==', true)
      .get().then( retornaDocumentos );