import Appointment from '../models/Appointment';
import { EntityRepository, Repository } from 'typeorm';

class AppointmentsRepository extends Repository<Appointment> {
  @EntityRepository(Appointment)
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date: date },
    })

    return findAppointment || null;
  }

}

export default AppointmentsRepository;
